class SymptomIndexPage
    include PageObject
    root_url = "http://localhost:8100/#"
    page_url(root_url + '/tabs/symptoms')

    elements(:symptom_item, { class: 'symptom-item' })
    div(:explanation, { id: 'empty' })
    button(:add_button, { id: 'add' })
    def add
        add_button
        sleep 0.4 #animation
    end

    def symptoms
        symptom_item_elements.map do |elem|
            { :description => elem.h2_element.text, :date => elem.span_element({class: 'date'}).text }
        end
    end

    def explanation_visible?
        explanation_element.visible?
    end
end
