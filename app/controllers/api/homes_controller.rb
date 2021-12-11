class Api::HomesController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index 
        @homes = Home.all
        # byebug
        if params[:location] 
            @homes = @homes.where(location: params[:location])
        else 
            @home = @homes.all
        end
        render :index
    end

    def show 
        @home = Home.find(params[:id])
    end

    def new 
        @home = :home.new
        render :new
    end

    def create
        # debugger 
        if params[:home][:photos]
            home_params[:photos] = params[:home][:photos]
        end

        @home = Home.new(home_params)

        if @home.save
            render :show
        else 
            render json: @home.errors.full_messages, status: 422
        end
    end

    def update
        # debugger
        @home = Home.find_by(id: params[:id])

        if @home && @home.update(home_params)
            render :show
        else 
            render json: @home.errors.full_messages, status: 422
        end
    end

    def destroy 
        @home = Home.find(params[:id])

        if @home.destroy

            render :show
        else 
            render json: @home.errors.full_messages, status: 403
        end
    end

    private 

    def home_params
        params.require(:home).permit(
            :title, 
            :price, 
            :description, 
            :location, 
            :bedroom, 
            :bathroom, 
            :lng, 
            :ltd,
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

