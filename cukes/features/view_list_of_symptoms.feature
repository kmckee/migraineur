Feature: View list of symptoms
    I want to view a list of my symptoms, 
    so that I can view my recent symptoms,
    As a Migraineur

    Scenario: No Migraines
        Given I have had no symptoms lately
        When I view my symptoms
        Then I should not see any symptoms
        And I should see text explaining the what and why of symptoms


