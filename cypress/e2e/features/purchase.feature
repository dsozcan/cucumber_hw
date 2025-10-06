Feature: Purchase Tests

    Scenario: TC01 Trendyol Login and Purchase E2E Test
        Given User navigates to login url
        When User enters valid email adress
        And User enters valid password
        And User clicks login button
        And User selects an item
        And User clicks purchase button
        And User completes purchase process
        Then User verifies successful purchase process