# Types of Testing

## Unit Test

- **Description:** Unit tests are the simplest and most cost-effective to implement. They focus on testing individual units or components of the software to ensure each part functions correctly in isolation.
- **Key Points:**
    - Tests the smallest part of an application, like a single function or class.
    - Quick to run.
    - Helps to identify bugs at an early stage.

## Integration Test

- **Description:** Integration tests assess how different pieces of the software interact with each other. This includes testing the integration between different modules or external services, like how your application interacts with a database or how different functions work together.
- **Key Points:**
    - Validates the interaction between components or systems.
    - More complex and might require more setup than unit tests.
    - Useful for catching issues that unit tests might miss, such as problems with data format, dependency integration, and interaction logic.

## Automation Test 
- **Description:** Automation testing refers to tests that are automated to run without manual intervention, and it encompasses various types of tests, including unit, integration, and UI tests.  
    -   **Key Points:**
        -   Tests the application from the user's perspective.
        -   Can be automated to ensure that user flows work as expected.
        -   Typically slower and more expensive to run than unit and integration tests.
        -   Useful for catching issues in the user interface or in the interaction between various components from an end-to-end perspective.