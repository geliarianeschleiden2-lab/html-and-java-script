function generatePlan() {

    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const duration = document.getElementById("duration").value;
    const mood = document.getElementById("mood").value;
    const studyPlan = document.getElementById("studyPlan");

    if (!name || !subject || !duration || !mood) {
        studyPlan.innerHTML = "⚠ Please complete all fields before generating your plan.";
        return;
    }

    let plan = `Hello ${name}! 👋 <br><br>`;
    plan += `Today you'll study <strong>${subject}</strong> for <strong>${duration} minutes</strong>.<br><br>`;

    if (mood === "motivated") {
        plan += `
        💪 Since you're feeling motivated:
        <ul>
            <li>Start with the hardest topic first</li>
            <li>Take short 5-minute breaks every 30 minutes</li>
            <li>Answer practice questions after studying</li>
            <li>End with a quick summary review</li>
        </ul>
        `;
    }

    else if (mood === "tired") {
        plan += `
        😴 Since you're feeling tired:
        <ul>
            <li>Break your session into 25-minute Pomodoro blocks</li>
            <li>Focus on light review instead of new topics</li>
            <li>Stay hydrated</li>
            <li>Rest your eyes during breaks</li>
        </ul>
        `;
    }

    else if (mood === "stressed") {
        plan += `
        😖 Since you're feeling stressed:
        <ul>
            <li>Do 5 minutes of deep breathing first</li>
            <li>Organize your notes before studying</li>
            <li>Start with easier tasks</li>
            <li>Reward yourself after finishing</li>
        </ul>
        `;
    }

    else if (mood === "happy") {
        plan += `
        😊 Since you're feeling happy:
        <ul>
            <li>Use active recall techniques</li>
            <li>Study with light background music</li>
            <li>Try explaining the lesson out loud</li>
            <li>Challenge yourself with quizzes</li>
        </ul>
        `;
    }

    else if (mood === "sad") {
        plan += `
        😔 Since you're feeling sad:
        <ul>
            <li>Start with a very small task</li>
            <li>Keep your session short and manageable</li>
            <li>Choose a comfortable study space</li>
            <li>Be kind to yourself — progress is still progress</li>
        </ul>
        `;
    }

    plan += "<br>🌟 You got this! Stay consistent and keep going!";

    studyPlan.innerHTML = plan;
}