class Api::EventsController < ApplicationController
    before_action :require_login, except: [:index]

    def index
        @events = Events.all 
        render :index
    end

    def show
        @event = Event.find_by(params[:id])
        render :show
    end

    def create
        @event = Event.new(event_params)
        if @event.save!
            render 'api/events/show'
        else
            render json: @event.errors.full_messages, status 401
        end
    end

    def edit

    end

    def destroy
        @event = Event.find_by(params[:id])
        if @event 
            @event.destroy
            # render something?
        else
            render json: ['Event not found']
        end
    end

    private
    def event_params
        params.require(:event).permit(:title, :description, :location, :start_date)
    end
end
