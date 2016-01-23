require 'rspec'
require 'page-object'
require 'factory_girl'
require 'uuid'
require_relative 'pouchdb'

World(PageObject::PageFactory)
World(FactoryGirl::Syntax::Methods)
