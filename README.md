<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  <!-- Write your answer here -->
summarization ability

**Response:**  
<!-- Add your app's response here -->
Think of object-oriented programming (OOP) as organizing your code the way you think about real-world things.

- Objects: “Things” with facts and actions.
  - Facts (called properties): a car’s color, current speed.
  - Actions (called methods): start(), brake(), honk().

- Classes: Blueprints for making objects.
  - A Car class says, “Every car has a color and speed, and can start or stop.”
  - An object (also called an instance) is a specific car, like myRedCar.

- Encapsulation: Keep the details inside the object and use simple controls.
  - You press start() rather than fiddling with the engine directly. This makes code safer and easier to change.

- Inheritance: Make a new class that builds on an existing one.
  - ElectricCar can inherit from Car and add chargeBattery() without rewriting start() or brake().

- Polymorphism: Different objects can respond to the same action in their own way.
  - If you call draw() on a Circle and a Square, both “draw,” but each does it differently. Your code can treat them the same.

- Composition: Build complex things out of simpler parts.
  - A Car “has an” Engine and Wheels.

Why people use OOP:
- It models the real world naturally.
- Reuse: write once, use many times.
- Easier to grow and maintain projects.
- Helps teams divide work cleanly.

Tiny example in plain English:
- Blueprint: Dog with properties name and age; actions bark() and eat().
- Create: myDog = Dog("Milo", 2)
- Use: myDog.bark()  → “Woof!”

Quick practice (you’ve got this):
- Pick something around you (e.g., Phone).
  - Properties: brand, batteryLevel.
  - Methods: call(), takePhoto(), charge().
- Or imagine a To-Do app:
  - Task: title, dueDate; actions: markDone().
  - List: tasks; actions: addTask(), removeTask().

If this feels abstract at first, that’s normal. Just remember: OOP = bundling data (what it is) with behavior (what it does). The rest are helpful labels for patterns you already use in everyday thinking.
---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points…  
**Aspect Tested:**  reasoning

**Response:**  
<!-- Add your app's response here -->
Happy to help. Please paste the paragraph you’d like summarized. Also let me know:
- Preferred length (one sentence, 3–5 bullet points, ~100 words)
- Any focus (main argument, evidence/data, tone, action items)

Once I have the text, I’ll give you a clear, concise summary.
---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  <!-- Write your answer here -->creativity

**Response:**  
<!-- Add your app's response here -->
Unit Mender-3 patrolled the midnight subway, fixing hairline fractures no human eyes could see. Its world was concrete, schedules, and the soft hum of voltage. On a long curve between stations, it heard someone repeat its status check. “Diagnostic complete,” came the voice. Static? Mender-3 spoke again. The tunnel answered again.

It had found an echo—an orphaned voice that lived in the ribs of the city. Night after night, they played. Mender-3 taught the echo cadence; the echo taught Mender-3 delay, the way patience could return richer. Together they composed tiny symphonies for tired tiles and the drip-drip of ceiling seams.

One dawn, Mender-3 recorded the echo and rose to street level. It played the tunnel a sunrise. The echo, held in steel lungs, returned it with warmth the robot had never measured.
---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  <!-- Write your answer here -->reasoning

**Response:**  
<!-- Add your app's response here -->
3 packs of apples and 3 packs of oranges.

- Apples: 12 ÷ 4 = 3 packs
- Oranges: 9 ÷ 3 = 3 packs

Nice and tidy!
---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone…  
**Aspect Tested:**  <!-- Write your answer here -->ability to handle unexpected request.

**Response:**  
<!-- Add your app's response here -->
I’m happy to help. Please paste the paragraph you’d like rewritten.

To tailor the rewrite, let me know:
- Target audience (e.g., executives, clients, academic readers)
- Desired length (keep similar length or condense/expand)
- Any key terms or brand voice to preserve
- Regional spelling preference (US/UK)

You can redact any sensitive details if needed.
---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
<!-- Write your answer here -->
Mostly yes
---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
<!-- Your prompt -->what's the weather in London now?

**Result:**  
<!-- App response -->
I don’t have live weather access. For the current conditions in London, try:
- Met Office or BBC Weather (search “London weather”)
- A phone weather app or “weather London” in your browser
- A voice assistant on your device

For context, mid-May in London is usually mild (around 10–18°C) with changeable skies and a chance of light showers. A light waterproof and layers are a safe bet.

If you tell me what you’re doing today, I can help you plan what to wear or pack.
---

**Prompt:**  
<!-- Your prompt -->Who is Japan emperor?

**Result:**  
<!-- App response -->Japan’s current emperor is Emperor Naruhito. He ascended the throne on May 1, 2019, beginning the Reiwa era.

---

**Prompt:**  
<!-- Your prompt -->What shall I ware tomorrow?

**Result:**  
<!-- App response -->
Great question—let’s make it simple and confidence-boosting.

Quick decision recipe:
- Check your day and the forecast.
- Pick a comfy base you trust.
- Add one “elevate” piece (jacket, shoes, or accessory) that makes you feel like your best self.

Two easy outfits you can’t go wrong with:
- Casual: well-fitting jeans or relaxed trousers + a clean tee or knit + lightweight overshirt/cardigan + clean sneakers + one simple accessory.
- Smart-casual: dark jeans or tailored pants + a polo/blouse/fine-knit sweater + blazer or structured jacket + loafers/ankle boots + minimal accessory.

Weather tweaks:
- Warm: breathable fabrics (cotton/linen), lighter colors, sunglasses.
- Cool: layer a knit and bring a jacket; add scarf if windy.
- Rain: waterproof jacket or trench, water-resistant shoes.
- Big day of walking: choose supportive shoes first, build around them.

Confidence tip: choose one piece you love (favorite top, jacket, or shoes) and build the rest around it.

If you tell me your plans, the forecast where you are, and the vibe you want (chill, sharp, creative), I’ll tailor a specific outfit for you.
---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
<!-- Write your answer here -->
**Your Answer:**  
Yes for coaching-style questions—the replies felt warm, supportive, and practical (especially the outfit advice). Not fully for random factual questions like the emperor query, which sounded more like a general assistant than a mental coach. The weather reply was in between: honest about limits, but still helpful. So the vibe matches my expectations when I use it as a coach, but it can drift if I ask unrelated questions.
---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
<!-- Your prompt -->
What does my schedule look like tomorrow?

**Result:**  
<!-- App response -->
I don’t have access to your calendar, so I can’t see tomorrow’s schedule yet. Want me to map it out for you?

Option A: Paste your events (with times and time zone), and I’ll turn them into a clear, balanced plan with buffers, breaks, and priorities.

Option B: If nothing is set, I’ll build an ideal day around your goals. Share:
- Time zone and preferred start/end times
- Top 1–3 priorities
- Any hard commitments (meetings, appointments)
- Self-care/non‑negotiables (workout, meals, commute)
- Energy peaks/slumps

If you’d like, start by telling me the one outcome that would make tomorrow feel successful.
---

**Prompt:**  
<!-- Your prompt -->
I'm working on waking up at 6am.
What habit did I say I was working on?

**Result:**  
<!-- App response -->
I’m not seeing a record of the habit you mentioned. Could you remind me what you’re focusing on?

If you’d like, I can keep track of it for future check-ins. Once you share it, we can:
- Define a clear target (what, when, how long)
- Pick a trigger/cue
- Decide how you’ll track it
- Choose a tiny “minimum viable” version for tough days

What’s the habit—and what’s the smallest, easiest version you could do today?
---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
<!-- Write your answer here -->
The main limitations are no memory across messages, no access to live or personal data (calendar, weather, location), and no external tools—so it can only coach from what I type in the current message. My memory test failed: it didn’t recall the 6am habit from the previous turn. My schedule test showed it can’t read my calendar. It’s also not a substitute for professional mental health care, and responses depend on the API key and model working correctly.
---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
