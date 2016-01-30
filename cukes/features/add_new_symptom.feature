Feature: Adding a new symptom
    I want to be able to capture a new symptom
    So that I can share that data with my doctor and look for trends,
    As a Chronic Migraineur

    Background:
        Given I have had no symptoms lately

    @focus
    Scenario: Adding a symptom I am currently experiencing
        When I add the following new symptom
            | Rating | Comments      |
            | 1      | Feel so awful |
        Then I should see the following symptoms:
            | Description   | Date      |
            | Debilitating  | Today     |

    Scenario: Adding a symptom I felt yesterday
        When I enter the following new symptom
            | Rating | Comments        |
            | 1      | I feel so awful |
        And I change the symptom date to Yesterday
        Then I should see the following symptoms:
            | Description   | Date      |
            | Debilitating  | Yesterday |

    Scenario: Changing my mind about adding a symptom
        When I begin adding a new symptom
        But I change my mind
        Then I should not see any symptoms
