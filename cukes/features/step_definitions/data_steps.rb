Given(/^I have had no symptoms lately$/) do
    # No Op
end

When(/^I view my symptoms$/) do
    visit(SymptomIndexPage)
end

Then(/^I should not see any symptoms$/) do
    expect(on(SymptomIndexPage).symptoms.count).to eql 0
end

Then(/^I should see text explaining the what and why of symptoms$/) do
    expect(on(SymptomIndexPage).explanation_visible?).to be true
end
