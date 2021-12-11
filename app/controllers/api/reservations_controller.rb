class Api::ReservationsController < ApplicationController
  before_action :require_logged_in

    def show 
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def create
        @reservation = Reservation.new(reservation_params)
        @reservation.guest_id = current_user.id

        if @reservation.save
            render :show
        else 
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id].to_i)
        
        if @reservation.destroy
            render :show
        else 
            render json: @reservation.errors.full_messages, status: 403
        end
    end

    def update 
        @reservation = Reservation.find(params[:id])
    end

    def reservation_params
        params.require(:reservation).permit(:check_in_date, :check_out_date, :number_of_guest, :guest_id, :listing_id)
    end
end