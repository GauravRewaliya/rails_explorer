class ExplorerController < ApplicationController
  before_action :set_allowed_roots

  def index
    if params[:path].present?
      full_path = CGI.unescape(params[:path])
      unless @allowed_roots.any? { |root| full_path.start_with?(root) }
        return render plain: "Access denied", status: :forbidden
      end

      @current_path = full_path
      @entries = Dir.entries(@current_path).reject { |e| e.start_with?(".") }.sort
      @folders = @entries.select { |f| File.directory?(File.join(@current_path, f)) }
      @images  = @entries.select { |f| f =~ /\.(jpg|jpeg|png|gif)$/i }
    else
      @roots = @allowed_roots
    end
  end

  private

  def set_allowed_roots
    @allowed_roots = ENV.fetch("EXPLORER_ROOTS", "").split(",").map(&:strip)
  end
end
