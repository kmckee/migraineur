class SymptomIndexPage
    include PageObject
    root_url = "http://localhost:8100/#"
    page_url(root_url + '/tabs/symptoms')

    elements(:symptom_item, { class: 'item' })
    div(:explanation, { id: 'explanation' })

    def symptoms
        symptom_item_elements
    end
end
