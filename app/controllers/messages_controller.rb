class MessagesController < ApplicationController

  def index
    @groupname = Group.find(2)
  end
  
end
