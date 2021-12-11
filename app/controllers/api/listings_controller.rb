class Api::ListingsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index 
        @listings = Listing.all
        # byebug
        if params[:location] 
            @listings = @listings.where(location: params[:location])
        else 
            @listing = @listings.all
        end
        render :index
    end

    def show 
        @listing = Listing.find(params[:id])
    end

    def new 
        @listing = :listing.new
        render :new
    end

    def create
        # debugger 
        if params[:listing][:photos]
            listing_params[:photos] = params[:listing][:photos]
        end

        @listing = Listing.new(listing_params)

        if @listing.save
            render :show
        else 
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @listing = Listing.find_by(id: params[:id])

        if @listing && @listing.update(listing_params)
            render :show
        else 
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def destroy 
        @listing = Listing.find(params[:id])

        if @listing.destroy

            render :show
        else 
            render json: @listing.errors.full_messages, status: 403
        end
    end

    private 

    def listing_params
        params.require(:listing).permit(
            :title, 
            :price, 
            :description, 
            :location, 
            :bedroom, 
            :bathroom, 
            :longitude, 
            :latitude,
            :owner_id,
            :host_name, 
            :city,
            photos: []
        )
    end

    def bounds
        params[:bounds]
    end
end

