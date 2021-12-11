class Api::BookingsController < ApplicationController
  before_action :require_logged_in

    def show 
        @booking = Booking.find(params[:id])
        render :show
    end

    def create
        @booking = Booking.new(booking_params)
        @booking.guest_id = current_user.id

        if @booking.save
            render :show
        else 
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def destroy
        @booking = Booking.find(params[:id].to_i)
        
        if @booking.destroy
            render :show
        else 
            render json: @booking.errors.full_messages, status: 403
        end
    end

    def update 
        @booking = Booking.find(params[:id])
    end

    def booking_params
        params.require(:booking).permit(:check_in, :check_out, :num_guests, :guest_id, :home_id)
    end
end