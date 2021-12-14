class Api::BookingsController < ApplicationController
    
    def show 
        @booking = Booking.find_by(id: params[:id])
        render :show
    end

    def index
        @bookings = Booking.where({guest_id: current_user.id})
        render :index
    end

    def create
        @booking = Booking.create(booking_params)
        if @booking.save 
            render :show
        end
    end

    def destroy
        @booking = Booking.find_by(id: params[:id])
        @booking.destroy
    end

    private 

    def booking_params 
        params.require(:booking).permit(:check_in_date, :check_out_date, :guest_id, :listing_id, :number_of_guest, :price)
    end
end