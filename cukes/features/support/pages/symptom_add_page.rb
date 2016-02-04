class SymptomAddPage
    include PageObject

    def initialize_page
        div_element({class: 'click-block'}).when_not_present
    end

    textarea(:comments, {id: 'comments'})
    button(:cancel, {id: 'cancel'})
    button(:save_button, {id: 'save'})

    def save
        save_button
        sleep 0.5
    end

    def rating= rating_int
        div_element({id: "rate-#{rating_int}"}).click
    end

    def rating
        div_element({class: 'selected-rating'}).click
    end

    def create symptom
        self.rating = symptom[:rating]
        self.comments = symptom[:comments]
        save
    end
end
