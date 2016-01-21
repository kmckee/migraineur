require 'watir-webdriver'

Before do
    @browser = Watir::Browser.new :chrome
    @browser.goto('http://localhost:8100')
    PouchDb::connect(@browser, 'test')
end

After do
    @browser.close
end
