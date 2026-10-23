// Knowledge base articles.
// Each article follows the troubleshooting format:
// Problem → Possible Causes → Diagnostic Procedure → Solution → Lesson Learned / Prevention
const ARTICLES = [
  {
    id: 1,
    title: "No internet connection (Wi-Fi connected but no internet)",
    category: "Network",
    keywords: ["wifi", "wi-fi", "internet", "network", "no internet", "offline", "dns", "ip"],
    problem: "The computer shows it is connected to Wi-Fi, but websites do not load.",
    causes: [
      "Router or modem problem, or the internet provider is down",
      "Wi-Fi adapter is disabled or its driver has a problem",
      "Incorrect IP configuration",
      "DNS problem"
    ],
    diagnosis: [
      "Check if other devices (like your phone) can use the same Wi-Fi. If they also can't, the problem is the router or provider.",
      "Open Command Prompt and type ipconfig. If the IPv4 address starts with 169.254, the computer did not get an IP address from the router.",
      "Type ping 8.8.8.8. If it replies, the internet works, so the problem is likely DNS.",
      "Type ping google.com. If 8.8.8.8 works but this fails, it is a DNS problem."
    ],
    solution: [
      "Restart the router and modem: unplug for 30 seconds, then plug back in.",
      "Turn Wi-Fi off and on, or forget the network and reconnect.",
      "In Command Prompt (as Administrator), run: ipconfig /release, then ipconfig /renew, then ipconfig /flushdns.",
      "Run the Windows Network troubleshooter (Settings → Network & internet).",
      "If still not working, update or reinstall the Wi-Fi driver in Device Manager."
    ],
    lesson: "Test from the simplest cause first: check other devices before changing settings on the computer."
  },
  {
    id: 2,
    title: "Computer is very slow",
    category: "Performance",
    keywords: ["slow", "lag", "hang", "freeze", "not responding", "performance", "memory", "disk"],
    problem: "The computer takes a long time to start, open apps, or respond.",
    causes: [
      "Too many programs running or starting automatically",
      "Low free space on the main drive (C:)",
      "Low RAM for the programs being used",
      "Malware or unwanted programs",
      "Pending Windows updates or the computer has not been restarted in a long time"
    ],
    diagnosis: [
      "Press Ctrl + Shift + Esc to open Task Manager. Check which programs use the most CPU, Memory, and Disk.",
      "Open File Explorer → This PC and check the free space on Local Disk (C:).",
      "In Task Manager → Startup apps, see how many programs start with Windows."
    ],
    solution: [
      "Restart the computer.",
      "Close programs you are not using, especially those using high Memory or CPU.",
      "Disable unneeded startup apps in Task Manager → Startup apps.",
      "Free up space: empty the Recycle Bin, delete old downloads, and run Disk Cleanup.",
      "Run a full scan with Windows Security (antivirus).",
      "Install pending Windows updates."
    ],
    lesson: "Keep at least 15–20% free space on drive C: and restart the computer regularly."
  },
  {
    id: 3,
    title: "Computer won't turn on or has no display",
    category: "Hardware",
    keywords: ["no power", "won't turn on", "no display", "black screen", "monitor", "boot", "ram", "hardware", "beep"],
    problem: "Nothing happens when the power button is pressed, or the computer turns on but the monitor stays black.",
    causes: [
      "Loose or faulty power cable, or the outlet has no power",
      "Monitor is off, on the wrong input, or its cable is loose",
      "RAM is loose or dirty",
      "Faulty power supply or other hardware"
    ],
    diagnosis: [
      "Check if the power light and fans turn on when you press the power button.",
      "Test the outlet with another device.",
      "Check that the monitor is on and set to the correct input (HDMI, VGA, DisplayPort).",
      "Listen for beep sounds when starting. Beeps can point to RAM or video problems."
    ],
    solution: [
      "Reconnect the power cable firmly and try another outlet.",
      "Reconnect the monitor cable at both ends and select the correct input.",
      "For desktops: turn off and unplug the PC, then remove the RAM, clean the gold contacts gently with an eraser, and reinsert it firmly.",
      "If there is still no power or display, escalate to a technician to test the power supply and other parts."
    ],
    lesson: "Always unplug the computer before opening it, and check the simple causes (cables and outlet) first."
  },
  {
    id: 4,
    title: "Printer is not printing",
    category: "Printer",
    keywords: ["printer", "print", "printing", "queue", "spooler", "paper jam", "offline"],
    problem: "Documents are sent to the printer, but nothing prints or the printer shows as offline.",
    causes: [
      "Printer is off, out of paper or ink, or has a paper jam",
      "Wrong printer is selected as default",
      "Stuck print jobs in the queue",
      "Print Spooler service has stopped",
      "Driver or connection problem (USB or network)"
    ],
    diagnosis: [
      "Check the printer's display or lights for errors (paper, ink, jam).",
      "Open Settings → Bluetooth & devices → Printers & scanners and check if the printer shows as Offline.",
      "Open the print queue to see if a job is stuck."
    ],
    solution: [
      "Turn the printer off and on, and load paper or replace ink if needed.",
      "Cancel all documents in the print queue, then print again.",
      "Restart the Print Spooler: press Windows + R, type services.msc, find Print Spooler, and click Restart.",
      "Set the correct printer as default.",
      "Reconnect the USB cable or reconnect the printer to the network. Reinstall the driver if needed."
    ],
    lesson: "Many printer problems are fixed by clearing the queue and restarting the Print Spooler."
  },
  {
    id: 5,
    title: "Forgot password or account is locked",
    category: "Accounts",
    keywords: ["password", "forgot", "locked", "login", "account", "sign in", "reset"],
    problem: "The user cannot log in because they forgot their password or the account is locked after too many attempts.",
    causes: [
      "Forgotten or recently changed password",
      "Caps Lock is on or the wrong keyboard language is used",
      "Too many failed attempts locked the account"
    ],
    diagnosis: [
      "Check if Caps Lock is on and the keyboard language is correct.",
      "Check if the login page shows an 'account locked' message.",
      "Confirm the user is entering the correct username or email."
    ],
    solution: [
      "Use the 'Forgot password' link and follow the reset steps sent to the registered email or phone.",
      "If the account is locked, wait for the lockout time to end, or ask the system administrator to unlock it.",
      "For work accounts, the IT Help Desk verifies the user's identity before resetting the password."
    ],
    lesson: "Never share passwords, even with IT staff. Use a password manager and turn on two-factor authentication (2FA)."
  },
  {
    id: 6,
    title: "Suspicious email or message (phishing)",
    category: "Security",
    keywords: ["phishing", "scam", "email", "suspicious", "link", "virus", "hacked", "security", "otp"],
    problem: "The user received an email or text asking them to click a link, log in, or send an OTP or password.",
    causes: [
      "Scammers pretending to be a bank, delivery company, school, or IT department",
      "Fake websites made to steal passwords"
    ],
    diagnosis: [
      "Check the sender's email address. Fake ones often have small misspellings.",
      "Look for urgent or threatening language like 'Your account will be closed today.'",
      "Hover over links (without clicking) to see the real website address.",
      "Be suspicious of any request for a password, PIN, or OTP."
    ],
    solution: [
      "Do not click links, open attachments, or reply.",
      "Report the message to the IT Help Desk, then delete it.",
      "If you already clicked or entered your password, change it immediately and turn on 2FA.",
      "Run an antivirus scan if you opened an attachment."
    ],
    lesson: "Real organizations will never ask for your password or OTP through email or text."
  },
  {
    id: 7,
    title: "Website design (CSS) is not loading",
    category: "Software",
    keywords: ["css", "website", "design", "html", "style", "not loading", "web", "vs code"],
    fromExperience: true,
    problem: "A web page shows plain text with no design, even though the CSS file was written.",
    causes: [
      "Wrong folder structure, so the CSS file is not where the HTML expects it",
      "Wrong file or folder name (for example styles.css instead of style.css)",
      "The CSS file was not saved",
      "Wrong path in the <link> tag"
    ],
    diagnosis: [
      "Check the <link href=\"css/style.css\"> path in the HTML.",
      "Compare it with the real folders in the VS Code sidebar.",
      "Check for an unsaved-file dot on the CSS tab in VS Code."
    ],
    solution: [
      "Fix the folder structure so the file is at css/style.css.",
      "Rename files and folders to match the path exactly.",
      "Save with Ctrl + S, then refresh the browser with F5."
    ],
    lesson: "From my own experience: I created folders named index.html and style.css by mistake. Use the New File and New Folder buttons carefully and check the sidebar."
  },
  {
    id: 8,
    title: "Image is not showing on a web page",
    category: "Software",
    keywords: ["image", "photo", "picture", "not showing", "broken image", "jpg", "png", "extension"],
    fromExperience: true,
    problem: "A web page shows the image's alt text or a broken image icon instead of the picture.",
    causes: [
      "Hidden file extensions, so the file is really profile.jpg.jpg",
      "Different file type than in the code (.png vs .jpg)",
      "Image is in the wrong folder",
      "Capital letters do not match (Profile.jpg vs profile.jpg)"
    ],
    diagnosis: [
      "Check the image's real name in the VS Code sidebar (it shows full extensions).",
      "Compare the name and folder with the src in the <img> tag."
    ],
    solution: [
      "Rename the file to match the code exactly, using lowercase letters.",
      "Move the image into the correct folder.",
      "In File Explorer, turn on View → Show → File name extensions to always see real file names."
    ],
    lesson: "From my own experience: Windows hid my file's extension. Turning on file name extensions prevents this problem."
  }
];