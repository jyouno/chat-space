class Api::MessagesController < ApplicationController
  before_action :set_group
  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    @users = @group.users
    respond_to do |format|
      format.json { 
        @new_message = @group.messages.where('id > ?', params[:id]) 
        render 'index.json.jbuilder'
      }
    end
  end

private

  def set_group
    @group = Group.find(params[:group_id])
  end
end