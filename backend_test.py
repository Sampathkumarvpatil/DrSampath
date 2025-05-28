import requests
import sys
from datetime import datetime

class APITester:
    def __init__(self, base_url="https://82720971-60cc-4ec6-8db9-8e94084cf262.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")

            return success, response.json() if 'application/json' in response.headers.get('Content-Type', '') else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test(
            "Root API Endpoint",
            "GET",
            "api",
            200
        )
    
    def test_create_status_check(self, client_name):
        """Test creating a status check"""
        return self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data={"client_name": client_name}
        )
    
    def test_get_status_checks(self):
        """Test getting all status checks"""
        return self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )

class UIChangeVerifier:
    def __init__(self, base_url="https://82720971-60cc-4ec6-8db9-8e94084cf262.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, expected_result, actual_result):
        """Run a single test"""
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        success = expected_result == actual_result
        if success:
            self.tests_passed += 1
            print(f"✅ Passed - Expected: {expected_result}, Got: {actual_result}")
        else:
            print(f"❌ Failed - Expected: {expected_result}, Got: {actual_result}")

        return success

    def summarize_results(self):
        """Print test results summary"""
        print(f"\n📊 UI Tests passed: {self.tests_passed}/{self.tests_run}")
        if self.tests_passed == self.tests_run:
            print("✅ All UI tests passed!")
        else:
            print(f"❌ {self.tests_run - self.tests_passed} UI tests failed")
        
        return self.tests_passed == self.tests_run

def test_ui_changes():
    """Test the UI changes using the results from Playwright tests"""
    print("\n===== UI CHANGE VERIFICATION =====")
    
    verifier = UIChangeVerifier()
    
    # Contact Page Tests
    
    # Test 1: Check that the "Office Hours" section has been removed
    expected_office_hours_present = False
    # Actual result verified via Playwright test
    actual_office_hours_present = "To be verified by Playwright"
    verifier.run_test(
        "Office Hours section removed",
        expected_office_hours_present,
        actual_office_hours_present
    )
    
    # Test 2: Verify that "Consulting & Speaking" section has been replaced with "Speaking Engagements"
    expected_speaking_engagements_present = True
    expected_consulting_services_present = False
    # Actual results verified via Playwright test
    actual_speaking_engagements_present = "To be verified by Playwright"
    actual_consulting_services_present = "To be verified by Playwright"
    verifier.run_test(
        "Speaking Engagements section present",
        expected_speaking_engagements_present,
        actual_speaking_engagements_present
    )
    verifier.run_test(
        "Consulting Services section removed",
        expected_consulting_services_present,
        actual_consulting_services_present
    )
    
    # Test 3: Check that the section title has been changed from "SERVICES" to "ENGAGEMENTS"
    expected_section_title = "ENGAGEMENTS"
    # Actual title verified via Playwright test
    actual_section_title = "To be verified by Playwright"
    verifier.run_test(
        "Section title changed to ENGAGEMENTS",
        expected_section_title,
        actual_section_title
    )
    
    # Test 4: Check that the FAQ question "Are you available for remote work?" has been removed
    expected_remote_work_faq_present = False
    # Actual result verified via Playwright test
    actual_remote_work_faq_present = "To be verified by Playwright"
    verifier.run_test(
        "Remote work FAQ question removed",
        expected_remote_work_faq_present,
        actual_remote_work_faq_present
    )
    
    # Test 5: Check that there are only 3 FAQs showing instead of 4
    expected_faq_count = 3
    # Actual count verified via Playwright test
    actual_faq_count = "To be verified by Playwright"
    verifier.run_test(
        "FAQ count is now 3",
        expected_faq_count,
        actual_faq_count
    )
    
    # Print summary
    success = verifier.summarize_results()
    
    # Additional notes
    print("\nContact Page UI Test Notes:")
    print("1. Office Hours section should be removed from the right sidebar")
    print("2. Consulting & Speaking section should be replaced with only Speaking Engagements")
    print("3. Consulting Services card should be removed, while Speaking Engagements card should remain")
    print("4. Section title should be changed from SERVICES to ENGAGEMENTS")
    print("5. FAQ question 'Are you available for remote work?' should be removed")
    print("6. There should be only 3 FAQs showing: 'What types of projects do you work on?', 'How do your consulting services work?', and 'What is your typical response time?'")
    
    return success

def main():
    # Setup
    tester = APITester()
    
    # Run API tests
    print("\n===== API TESTING =====")
    tester.test_root_endpoint()
    
    # Test status endpoints
    client_name = f"test_client_{datetime.now().strftime('%Y%m%d%H%M%S')}"
    success, response = tester.test_create_status_check(client_name)
    
    if success:
        print(f"Created status check with ID: {response.get('id', 'unknown')}")
        
    tester.test_get_status_checks()
    
    # Print API test results
    print(f"\n📊 API Tests passed: {tester.tests_passed}/{tester.tests_run}")
    api_success = tester.tests_passed == tester.tests_run
    
    # Run UI tests
    ui_success = test_ui_changes()
    
    # Overall result
    print("\n===== OVERALL TEST RESULTS =====")
    if api_success and ui_success:
        print("✅ All tests passed!")
    else:
        print("❌ Some tests failed")
    
    return 0 if (api_success and ui_success) else 1

if __name__ == "__main__":
    sys.exit(main())