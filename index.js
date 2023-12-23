$(document).ready(function() {
    const employees = [{
            name: 'Ravi',
            mobile: 1234567890,
            department: {
                name: 'Node'
            },
        },
        {
            name: 'Nitesh',
            mobile: 1234567801,
            department: {
                name: 'Node'
            },
        },
        {
            name: 'Radhe',
            mobile: 1114567890,
            department: {
                name: 'Node'
            },
        },
        {
            name: 'Manish',
            mobile: 9876543210,
            department: {
                name: 'Android'
            },
        },
        {
            name: 'Amit',
            mobile: 7416543210,
            department: {
                name: 'Android'
            },
        },
        {
            name: 'Prachi',
            mobile: 7416500010,
            department: {
                name: 'Android'
            },
        },
        {
            name: 'Neeraj',
            mobile: 9876654210,
            department: {
                name: 'Java'
            },
        },
        {
            name: 'Ramesh',
            mobile: 97776654210,
            department: {
                name: 'Java'
            },
        },
        {
            name: 'Naresh',
            mobile: 9876664210,
            department: {
                name: 'Java'
            },
        },
        {
            name: 'Anjali',
            mobile: 9876654852,
            department: {
                name: 'PHP'
            },
        },
        {
            name: 'Prashant',
            mobile: 9876654222,
            department: {
                name: 'PHP'
            },
        },
        {
            name: 'Shoaib',
            mobile: 9870000022,
            department: {
                name: 'PHP'
            },
        },
    ];

    // Function to render employees by department
    function renderEmployeesByDepartment() {
        $("#employeeList").empty();

        const departments = [...new Set(employees.map(emp => emp.department.name))];

        departments.forEach(department => {
            // Render department checkbox
            $("#employeeList").append(`<div><input type="checkbox" class="departmentCheckbox" data-department="${department}">${department}</div>`);

            // Render employees under the department
            employees.filter(emp => emp.department.name === department).forEach(emp => {
                $("#employeeList").append(`<div><input type="checkbox" class="employeeCheckbox" data-department="${department}" data-name="${emp.name}">${emp.name}</div>`);
            });
        });

        // Attach event listener for department checkbox
        $(".departmentCheckbox").change(function() {
            const department = $(this).data("department");
            $(`.employeeCheckbox[data-department="${department}"]`).prop("checked", this.checked);
        });

        // Attach event listener for employee checkbox
        $(".employeeCheckbox").change(function() {
            const department = $(this).data("department");
            const isChecked = this.checked;

            // Update department checkbox status based on employee checkboxes
            $(`.departmentCheckbox[data-department="${department}"]`).prop("checked", isChecked);
        });
    }

    // Save checked data to localStorage
    $("#saveButton").click(function() {
        const checkedData = [];

        $(".employeeCheckbox:checked").each(function() {
            checkedData.push({
                department: $(this).data("department"),
                name: $(this).data("name")
            });
        });

        // Save data to localStorage
        localStorage.setItem("checkedData", JSON.stringify(checkedData));

        // Navigate to the next page (display.html)
        window.location.href = "display.html";
    });

    // Initial rendering
    renderEmployeesByDepartment();
});