Feature: Deleting symptoms
    In order to remove inaccurate symptoms
    I want to be able to delete symptoms
    As a Chronic Migraineur

Scenario: Removing a symptom
    Given I have had the following symptoms:
        | Date     | Rating |
        | 1/1/2002 | 1      |
        | 1/2/2013 | 2      |
    And I view my symptoms
    When I delete the Debilitating symptom
    Then I should see the following symptoms:
        | Description   | Date        |
        | Severe        | 3 years ago |

    # Converting ratings to text description implicitly is confusing.  Map it.
