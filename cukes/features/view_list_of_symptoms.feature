Feature: View list of symptoms
    I want to view a list of my symptoms,
    So that I can view my recent symptoms,
    As a Migraineur

    Scenario: No entries
        Given I have had no symptoms lately
        When I view my symptoms
        Then I should not see any symptoms
        And I should see text explaining the what and why of symptoms

    Scenario: Multiple entries
        Given I have had the following symptoms:
            | Date     | Rating | Comments               |
            | 1/1/2012 | 1      | Terrible migraine      |
            | 1/2/2012 | 2      | Pretty bad migraine    |
            | 1/3/2012 | 3      | Mild migraine today    |
            | 1/4/2012 | 4      | Felt OK today          |
            | 1/5/2012 | 5      | Felt GREAT today!      |
        When I view my symptoms
        Then I should see the following symptoms:
            | Description   | Date        |
            | Debilitating  | 4 years ago |
            | Severe        | 4 years ago |
            | Mild          | 4 years ago |
            | OK            | 4 years ago |
            | Great         | 4 years ago |
# this will fail in 2017; yolo
