
    let userInput = document.getElementById("date");
    userInput.max = new Date().toISOString().split('T')[0];

    function calculate() {
      let userBirthDate = new Date(userInput.value);

      if (userInput.value == "") {

        alert("Please Select You Date of Birth")

        document.getElementById("result").textContent = "Please select your date of birth.";
        return;
      }

      let userDay = userBirthDate.getDate();
      let userMonth = userBirthDate.getMonth() + 1;
      let userYear = userBirthDate.getFullYear();

      let currentDate = new Date();
      let currentDay = currentDate.getDate();
      let currentMonth = currentDate.getMonth() + 1;
      let currentYear = currentDate.getFullYear();

      let Age = currentYear - userYear;
      let months = currentMonth - userMonth;
      let days = currentDay - userDay;

      if (days < 0) {
        months--;
        const prevMonth = new Date(currentYear, currentMonth - 1, 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        Age--;
        months += 12;
      }

      document.getElementById("result").innerHTML =
        `You are <span>${Age}</span> year(s), <span>${months}</span> month(s), and <span>${days}</span> day(s) Old.`;
    }
