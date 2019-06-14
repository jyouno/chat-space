class MessagesController < ApplicationController
  before_action :set_group
  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    @users = @group.users
  end
  
  def create
    @message = @group.messages.new(message_params)
    @message.save
    respond_to do |format|
      format.html {
        redirect_to root_path
      }
      format.json {
        render 'create.json.jbuilder'
      }
    end
    
  end

private

def message_params
  params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
end

def set_group
  @group = Group.find(params[:group_id])
end
end
