Given(/^I have had no symptoms lately$/) do
    # No Op
end

Given(/^I have had the following symptoms:$/) do |symptom_table|
    symptom_table.symbolic_hashes.each do |symptom|
        FactoryGirl.create(:symptom, symptom)
    end
end

When(/^I view my symptoms$/) do
    visit(SymptomIndexPage)
    @browser.refresh
    sleep 2
end

Then(/^I should not see any symptoms$/) do
    expect(on(SymptomIndexPage).symptoms.count).to eql 0
end

Then(/^I should see text explaining the what and why of symptoms$/) do
    expect(on(SymptomIndexPage).explanation_visible?).to be true
end

Then(/^I should see the following symptoms:$/) do |expected_symptoms|
    expect(on(SymptomIndexPage).symptoms).to match_array(expected_symptoms.symbolic_hashes)
end

When(/^I add the following new symptom$/) do |symptom_table|
    symptom = symptom_table.symbolic_hashes.first
    on(SymptomIndexPage).add
    on(SymptomAddPage).create(symptom)
end
