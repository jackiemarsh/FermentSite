class Api::EventRsvpsController < ApplicationController

    def create
        @event_rsvp = EventRsvp.new(rsvp_params)
        @event_rsvp.user_id = current_user.id
        if @event_rsvp.save 
            render :show
        else
            render json: @event_rsvp.errors.full_messages, status: 401
        end
    end

    def index 
        @event_rsvps = current_user.event_rsvps
        render :index
    end

    def destroy
        @event_rsvp = EventRsvp.find_by(event_id: params[:id])
        if @event_rsvp && @event_rsvp.destroy
            render json: { id: @event_rsvp.id }
            # render 'api/events/show'
        else
            render json: ['You are not RSVPed to this event'], status: 422
        end
    end

    def rsvp_params
        params.require(:event_rsvp).permit(:event_id, :user_id)
    end
end
