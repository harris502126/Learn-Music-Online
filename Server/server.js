import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
import cors from 'cors';





const app = express();
app.use(bodyParser.json());
app.use(cors())
const pool = mysql.createPool({
  host:'localhost',
  user:'root',
  database:'db_eshop',
  password:'ratnapaul'
})

app.post('/api/stud/regi', (req, res) => {
  const { name, email, password ,level} = req.body;
console.log(name)
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Please provide name, email, and password' });
  }

  pool.query('SELECT * FROM cust_details WHERE email = ?', [email], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'Something went wrong' });
    }
    if (results.length > 0) {
      return res.status(409).json({ error: 'User already exists' });
    }
    const newUser = {
      name,
      email,
      password,
      level
    };
    console.log(level)
    pool.query('INSERT INTO cust_details SET ? ', newUser, (insertError) => {
      if (insertError) {
        console.error('Error executing query:', insertError);
        return res.status(500).json({ error: 'Something went wrong' });
      }

      res.status(201).json({ message: 'User registered successfully' });
    })
 
});
});


app.post('/api/tutor/regi', (req, res) => {
  const { name, email, password, level, selection } = req.body;
  const course = 'piano';
  let studentId; // Variable to store the student id

  pool.query('SELECT id FROM cust_details WHERE email = ?', [email], (error, results) => {
    if (error) {
      console.error('Error executing SELECT query:', error);
      return res.status(500).json({ error: 'Something went wrong' });
    }

    if (results.length > 0) {
      studentId = results[0].id; // Store the student id
      const status = 'active';
      const student_name = name;
      const insertable = {
        student_id: studentId,
        student_name,
        course,
        level,
        status,
      };

      if (selection) {
        if (selection === '1') {
          pool.query('INSERT INTO tutor_one SET ?', insertable, (insertError) => {
            if (insertError) {
              console.error('Error executing INSERT query:', insertError);
              return res.status(500).json({ error: 'Something went wrong' });
            }

            pool.query('UPDATE cust_details SET tutor_id = ? WHERE email = ?', [selection, email], (updateError, updateResult) => {
              if (updateError) {
                console.error('Error executing UPDATE query:', updateError);
                return res.status(500).json({ error: 'Something went wrong' });
              }

              res.status(201).json({ message: 'User registered successfully' });
            });
          });
        }

        if (selection === '2') {
          pool.query('INSERT INTO tutor_two SET ?', insertable, (insertError) => {
            if (insertError) {
              console.error('Error executing INSERT query:', insertError);
              return res.status(500).json({ error: 'Something went wrong' });
            }

            pool.query('UPDATE cust_details SET tutor_id = ? WHERE email = ?', [selection, email], (updateError, updateResult) => {
              if (updateError) {
                console.error('Error executing UPDATE query:', updateError);
                return res.status(500).json({ error: 'Something went wrong' });
              }

              res.status(201).json({ message: 'User registered successfully' });
            });
          });
        }
        if (selection === '3') {
          pool.query('INSERT INTO tutor_three SET ?', insertable, (insertError) => {
            if (insertError) {
              console.error('Error executing INSERT query:', insertError);
              return res.status(500).json({ error: 'Something went wrong' });
            }

            pool.query('UPDATE cust_details SET tutor_id = ? WHERE email = ?', [selection, email], (updateError, updateResult) => {
              if (updateError) {
                console.error('Error executing UPDATE query:', updateError);
                return res.status(500).json({ error: 'Something went wrong' });
              }

              res.status(201).json({ message: 'User registered successfully' });
            });
          });
        }
        if (selection === '4') {
          pool.query('INSERT INTO tutor_four SET ?', insertable, (insertError) => {
            if (insertError) {
              console.error('Error executing INSERT query:', insertError);
              return res.status(500).json({ error: 'Something went wrong' });
            }

            pool.query('UPDATE cust_details SET tutor_id = ? WHERE email = ?', [selection, email], (updateError, updateResult) => {
              if (updateError) {
                console.error('Error executing UPDATE query:', updateError);
                return res.status(500).json({ error: 'Something went wrong' });
              }

              res.status(201).json({ message: 'User registered successfully' });
            });
          });
        }
      }
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  });
});



// app.get('/api/tutor',(req,res)=>
// {
//   pool.query('SELECT * FROM staff_details',(error,results)=>
//   {
//     if(error)
//     {
//       console.error('Error executing SELECT query:', error);
//       return res.status(500).json({ error: 'Something went wrong' });
//     }
//     if(results.length>0)
//     {
//       return res.json(results)
//     }
//   }
//   )
// })





app.post('/api/staff/regi', (req, res) => {
  const { name, email, subject, password } = req.body;
  console.log(name);

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Please provide staff_name, staff_email, and staff_password' });
  }

  pool.query('SELECT * FROM staff_details WHERE staff_email = ?', [email], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'Something went wrong' });
    }

    if (results.length > 0) {
      return res.status(409).json({ error: 'User already exists' });
    }
    const staff_name= name;
    const staff_email= email
    const staff_password = password
    const newUser = {
      staff_name,
      staff_email,
      subject,
      staff_password,
    };

    pool.query('INSERT INTO staff_details SET ?', newUser, (insertError) => {
      if (insertError) {
        console.error('Error executing query:', insertError);
        return res.status(500).json({ error: 'Something went wrong' });
      }

      res.status(201).json({ message: 'Staff registered successfully' });
    });
  });
});

app.post('/api/stud/login', (req, res) => {
  const { name,  email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Please provide  email, and password' });
  }

  // Check if the user already exists in the database
  pool.query('SELECT * FROM cust_details WHERE email = ? and password = ? and name=?', [email,password,name], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'Something went wrong' });
    }
    if (results.length > 0) {
      console.log(results)
      
      return res.status(200).json(results);
       
    }
    else{


    }
    
 
});
})

app.post('/api/staff/login', (req, res) => {
  const { name,  email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Please provide  email, and password' });
  }

  // Check if the user already exists in the database
  pool.query('SELECT * FROM staff_details WHERE staff_email = ? and staff_password = ? and staff_name=?', [email,password,name], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({ error: 'Something went wrong' });
    }
    if (results.length > 0) {
      console.log(results)
      
      return res.status(200).json(results);
       
    }
    else{


    }
    
 
});
})






app.listen(3000, () => {
  console.log('Server started on port 3000');
});
