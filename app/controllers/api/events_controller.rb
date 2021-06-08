class Api::EventsController < ApplicationController
    before_action :require_login, except: [:index, :show]

    def index
        @events = Event.all 
        render :index
    end

    def show
        @event = Event.find(params[:id])
        render :show
    end

    def create
        @event = Event.new(event_params)
        # @event.author_id = current_user.id
        if @event.save!
            render 'api/events/show'
        else
            render json: @event.errors.full_messages, status: 401
        end
    end

    # def edit

    # end

    def destroy
        @event = Event.find(params[:id])
        if @event 
            @event.destroy
            # render something?
        else
            render json: ['Event not found']
        end
    end

    private
    def event_params
        params.require(:event).permit(:title, :description, :location, :start_date, :author_id, :image)
    end
end
