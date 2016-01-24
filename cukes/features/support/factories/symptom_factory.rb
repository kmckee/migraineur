FactoryGirl.define do
    factory :symptom do
        _id { 'symptom_' + UUID.new.generate }
        rating 3
        date Time.now
        comments "Sample comment"
    end
end

class Symptom
    include PouchDb::Base
    attr_writer :rating, :date, :comments, :_id
end
