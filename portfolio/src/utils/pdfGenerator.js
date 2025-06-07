export const generatePDF = () => {
  // Create a new window with the content
  const content = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Resume - Abdel Fattah Abu Eshkian</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; padding: 40px; max-width: 800px; margin: 0 auto; color: #333; }
        h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; margin-bottom: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .info { margin-bottom: 30px; }
        .info p { margin: 8px 0; }
        .section { margin-bottom: 25px; }
        .section h2 { 
          color: #3498db; 
          margin-bottom: 15px; 
          padding-bottom: 5px;
          border-bottom: 1px solid #eee;
        }
        .info-item { margin-bottom: 10px; }
        .info-item strong { display: inline-block; width: 150px; }
        @media print {
          body { padding: 20px; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Abdel Fattah Abu Eshkian</h1>
        <p>Computer Science Student & Web Developer</p>
      </div>
      
      <div class="info">
        <div class="section">
          <h2>Personal Information</h2>
          <div class="info-item"><strong>Name:</strong> Abdel Fattah Abu Eshkian</div>
          <div class="info-item"><strong>Student Number:</strong> 120210664</div>
          <div class="info-item"><strong>Course:</strong> Web Development 1 Lab</div>
          <div class="info-item"><strong>Institution:</strong> Islamic University of Gaza</div>
          <div class="info-item"><strong>Email:</strong> abdeshkian@students.iugaza.edu.ps</div>
          <div class="info-item"><strong>Location:</strong> Palestine, Gaza Strip</div>
        </div>
        
        <div class="section">
          <h2>Education</h2>
          <div class="info-item">
            <strong>Bachelor of Computer Science</strong>
            <p>Islamic University of Gaza</p>
            <p>2021 - Present</p>
            <p>Specialized in Software Engineering and Cyber Security</p>
          </div>
        </div>
        
        <div class="section">
          <h2>Skills</h2>
          <div class="info-item">
            <strong>Web Development:</strong> HTML, CSS, JavaScript, React
          </div>
          <div class="info-item">
            <strong>UI/UX Design:</strong> Figma, Adobe XD
          </div>
          <div class="info-item">
            <strong>Graphic Design:</strong> Adobe Photoshop, Illustrator
          </div>
          <div class="info-item">
            <strong>Other:</strong> Problem Solving, Team Collaboration
          </div>
        </div>
      </div>
      
      <div class="no-print" style="text-align: center; margin-top: 50px; font-size: 0.9em; color: #777;">
        <p>This resume was generated from my portfolio website. Last updated: ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
  `;

  // Open a new window with the content
  const win = window.open('', '_blank');
  win.document.open();
  win.document.write(content);
  win.document.close();
  
  // Use the browser's print to PDF functionality
  win.onload = function() {
    setTimeout(() => {
      win.print();
      // win.close(); // Uncomment this line if you want the window to close after printing
    }, 100);
  };
};
