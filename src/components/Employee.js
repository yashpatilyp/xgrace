import React from "react";

function Employee() {
    const employees = Array.from({ length: 8 }, (_, idx) => ({
        name: `Employee ${idx + 1}`,
        image: "/assets/img/tabs-3.jpg",
        data: "Employee data",
    }));

    // Chunk the employees array to show 4 cards per slide
    const chunkedEmployees = [];
    for (let i = 0; i < employees.length; i += 4) {
        chunkedEmployees.push(employees.slice(i, i + 4));
    }

    return (
        <>
            <div className="container section-title" data-aos="fade-up">
                <h2 className="text-center fw-bold">Employee</h2>
                <p>Creating Innovative Web Solutions Together</p>


                <div id="employeeCarousel" className="carousel slide my-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {chunkedEmployees.map((group, idx) => (
                        <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
                            <div className="row g-4">
                                {group.map((employee, index) => (
                                    <div className="col-md-3" key={index}>
                                        <div className=" shadow p-3 mb-5 bg-body-tertiary rounded">
                                            <img
                                                src={employee.image}
                                                alt={employee.name}
                                                className="card-img-top rounded-circle"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{employee.name}</h5>
                                                <p className="card-text">{employee.data}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#employeeCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#employeeCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>

            
        </>
    );
}

export default Employee;
