require 'json'

FactoryGirl.define do
    factory :symptom do
        rating 3
        date Time.now
        comments "Sample comment"
    end
end

class Symptom
    include PouchDb::Base
    attr_writer :rating, :date, :comments
end
