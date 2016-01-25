@ignore @not_implemented_yet
Feature:  Editing Symptoms
    I want to be able to edit my symptoms
    So that I can fix my mistakes, or change my mind
    As a Chronic Migraineur

    Scenario: Changing a symptom
        Given I have had the following symptoms:
            | Date      | Rating | Comment   |
            | Yesterday | 1      | Neck Pain |
        When I edit the first symptom to be
            | Date      | Rating | Comment   |
            | Today     | 5      | A-OK!     |
        Then I should see the following symptoms:
            | Date      | Rating | Comment   |
            | Today     | 5      | A-OK!     |

    Scenario: Changing my mind about changes to a symptom (cancel)
        Given I have had the following symptoms:
            | Date      | Rating | Comments          |
            | Yesterday | 1      | Terrible migraine |
        When I begin changing the symptom to be
            | Date      | Rating | Comments          |
            | Today     | 5      | Whoops!           |
        But I cancel my changes to the symptom
        Then I should see the following symptoms:
            | Date      | Rating | Comments          |
            | Yesterday | 1      | Terrible Migraine |
