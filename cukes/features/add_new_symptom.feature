@ignore @not_implemented_yet
Feature: Adding a new symptom
    I want to be able to capture a new symptom
    So that I can share that data with my doctor and look for trends,
    As a Chronic Migraineur

    Scenario: Adding a symptom I am currently experiencing
        Given I have had no recent symptoms
        When I add the following new symptom
            | Rating | Comments      |
            | 1      | Feel so awful |
        Then I should see the following symptoms:
            | Description   | Date      |
            | Debilitating  | Today     |

    Scenario: Adding a symptom I felt yesterday
        Given I have had no recent symptoms
        When I enter the following new symptom
            | Rating | Comments        |
            | 1      | I feel so awful |
        And I change the symptom date to Yesterday
        Then I should see the following symptoms:
            | Description   | Date      |
            | Debilitating  | Yesterday |

    Scenario: Changing my mind about adding a symptom
        Given I have had no recent symptoms
        When I begin adding a new symptom
        But I change my mind
        Then I should not see any symptoms
