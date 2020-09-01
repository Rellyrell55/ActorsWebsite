class ActorsController < ApplicationController
    def index 
        @actors = Actor.all 

        render json: @actors 
    end

    def show 
        @actor = Actor.find(params[:id])
        render json: @actor, include:[:id]
    end 
    
    # def create 
    #     @actor = Actor.create(
    #         name: params[:name], 
    #         age: params[:age]
    #         image: params[:image]
    #         bio: params[:bio]
    #     )
    #     render json: @actor
    # end
end
