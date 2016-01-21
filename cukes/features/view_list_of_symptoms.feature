Feature: View list of symptoms
    I want to view a list of my symptoms, 
    so that I can view my recent symptoms,
    As a Migraineur

    Scenario: No entries
        Given I have had no symptoms lately
        When I view my symptoms
        Then I should not see any symptoms
        And I should see text explaining the what and why of symptoms

    Scenario: Multiple entries
        Given I have had the following symptoms:
            | Date     | Rating | Comments               |
            | 1/1/2016 | 1      | Terrible migraine      |
            | 1/2/2016 | 2      | Pretty bad migraine    |
            | 1/3/2016 | 3      | Mild migraine today    |
            | 1/4/2016 | 4      | Felt OK today          |
            | 1/5/2016 | 5      | Felt GREAT today!      |
        When I view my symptoms
        Then I should see the following symptoms:
            | Description   | Date        |
            | Debilitating  | Jan 1, 2016 |
            | Severe        | Jan 2, 2016 |
            | Mild          | Jan 3, 2016 |
            | OK            | Jan 4, 2016 |
            | Great!        | Jan 5, 2016 |

