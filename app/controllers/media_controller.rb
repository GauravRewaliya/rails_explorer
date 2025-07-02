class MediaController < ApplicationController
  def show
    filepath = params[:path]

    if filepath.present? && File.exist?(filepath)
      send_file filepath, disposition: "inline", type: Marcel::MimeType.for(Pathname.new(filepath))
    else
      head :not_found
    end
  end
end
