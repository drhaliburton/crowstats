import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useTable} from 'react-table'
import logo from './assets/Crows_Logo_Blue.png'

const Styles = styled.div`
  padding: 1rem;
  max-width: 750px;
  text-align: center;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

const Logo = styled.img`
  max-width: 200px;
  margin: auto;
`

const Table = ({columns, data}) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({
		columns,
		data,
	})

	return (
		<table {...getTableProps()}>
			<thead>
			{headerGroups.map(headerGroup => (
				<tr {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map(column => (
						<th {...column.getHeaderProps({style: {width: '100%'}})}>{column.render('Header')}</th>
					))}
				</tr>
			))}
			</thead>
			<tbody {...getTableBodyProps()}>
			{rows.map((row, i) => {
				prepareRow(row)
				return (
					<tr {...row.getRowProps({style: {width: '100%'}})}>
						{row.cells.map((cell, i) => {
							return <td {...cell.getCellProps({
								style: {
									width: '100%',
									textAlign: i === 0 ? 'left' : 'right'
								}
							})}>{cell.render('Cell')}</td>
						})}
					</tr>
				)
			})}
			</tbody>
		</table>
	)
}

const App = () => {

	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState([])
	const yearHeaders = data.reduce((headers, dataSet) => {
		const keys = Object.keys(dataSet)
		keys.forEach((key) => {
			if (/\d{4}/.test(key) && !headers?.includes(key)) {
				headers.push(key)
			}
		})
		return headers
	}, [])
	const yearColumns = yearHeaders.reverse().map((year) => ({
		Header: year,
		accessor: year.toLowerCase(),
	}))
	const columns = React.useMemo(
		() => [
			{
				Header: 'Crowmeruns',
				columns: [
					{
						Header: 'Name',
						accessor: 'name',
					},
					...yearColumns,
					{
						Header: 'Total',
						accessor: 'total',
					},
				],
			},
		],
		[yearColumns]
	)

	useEffect(() => {
		if (!data.length && isLoading) {
			fetch('https://sheet.best/api/sheets/969a17ba-d4ed-49ee-920e-bca9fe9d7dd9')
				.then(response => response.json())
				.then(data => {
					setData(data)
					setIsLoading(false)
				});
		}
	}, [data, isLoading])

	if (isLoading) {
		return (
			<Styles>
				<img alt="flying crow" src="https://i.pinimg.com/originals/bb/09/58/bb0958d5f92bf787c6091c850b30a6e2.gif"/>
			</Styles>
		)
	}

	return (
		<Styles>
			<Logo src={logo} alt="ca-caw"/>
			<Table columns={columns} data={data}/>
		</Styles>
	)
}

export default App
