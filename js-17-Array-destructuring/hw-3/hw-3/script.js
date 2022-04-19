function func([name,surname,department]) {

	
	if (department === undefined) {
		position = 'джуниор';
  }
  console.log(name)
  console.log(surname)
  console.log(department)
}

func( ['Иван', 'Иванов', 'отдел разработки'] );