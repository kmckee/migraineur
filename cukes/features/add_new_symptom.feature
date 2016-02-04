Feature: Adding a new symptom
    I want to be able to capture a new symptom
    So that I can share that data with my doctor and look for trends,
    As a Chronic Migraineur

    Background:
        Given I have had no symptoms lately

    Scenario: Adding a symptom I am currently experiencing
        When I add the following new symptom
            | Rating | Comments      |
            | 1      | Feel so awful |
        Then I should see the following symptoms:
            | Description   | Date              |
            | Debilitating  | a few seconds ago |
