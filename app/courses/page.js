"use client";

export default function CoursesPage() {

  const courses = [

    {
      title: "Cricket Masterclass",
      coach: "Virat Coach",
      price: "₹499",
      level: "Normal",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc"
    },

    {
      title: "Football Speed Training",
      coach: "Ronaldo Coach",
      price: "₹999",
      level: "Premium",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974"
    },

    {
      title: "Gym Beast Program",
      coach: "Fitness Pro",
      price: "₹1999",
      level: "Premium DP",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    }

  ];

  return (

    <div style={styles.page}>

      <h1 style={styles.heading}>
        🎓 Sports Courses
      </h1>

      {courses.map((course, index) => (

        <div
          key={index}
          style={styles.card}
        >

          <img
            src={course.image}
            style={styles.image}
          />

          <div style={styles.content}>

            <h2>{course.title}</h2>

            <p style={styles.coach}>
              Coach: {course.coach}
            </p>

            <p style={styles.level}>
              {course.level}
            </p>

            <h3 style={styles.price}>
              {course.price}
            </h3>

            <button style={styles.button}>
              Buy Course
            </button>

          </div>

        </div>

      ))}

    </div>

  );

}

const styles = {

  page: {
    background: "#020817",
    minHeight: "100vh",
    padding: 20,
    color: "white",
    fontFamily: "sans-serif"
  },

  heading: {
    fontSize: 35,
    marginBottom: 30
  },

  card: {
    background: "#081120",
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 30,
    border: "1px solid #1d2b44"
  },

  image: {
    width: "100%",
    height: 220,
    objectFit: "cover"
  },

  content: {
    padding: 20
  },

  coach: {
    color: "#aaa",
    marginTop: 10
  },

  level: {
    color: "#39ff14",
    marginTop: 10,
    fontWeight: "bold"
  },

  price: {
    marginTop: 15,
    fontSize: 28
  },

  button: {
    marginTop: 20,
    width: "100%",
    padding: 15,
    border: "none",
    borderRadius: 15,
    background: "#39ff14",
    fontWeight: "bold",
    fontSize: 16
  }

};
