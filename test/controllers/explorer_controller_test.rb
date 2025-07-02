require "test_helper"

class ExplorerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get explorer_index_url
    assert_response :success
  end
end
