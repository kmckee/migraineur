require 'watir-webdriver'

browser = Watir::Browser.new :chrome

Before do
    @browser = browser
    @browser.goto('http://localhost:8100')
    PouchDb::connect(@browser, 'migraineur_db')
    # Clear the database!
end

at_exit do
    browser.close
end
