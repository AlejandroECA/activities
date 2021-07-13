import React,{useEffect, useState, useRef, Suspense} from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';


import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



const AgGridComponent = () => {

    const d = new Date();

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    const gridRef = useRef()

    const [rowData,setRowData] = useState([])




    const PurchasesInput = () => {


        const removeLast = () => {

            console.log(rowData)

            return (rowData.length > 0)?
                setRowData(rowData.slice(0,-1)):null

            // this.setState({
            //     objectList: this.state.objectList.slice(0,-1)
            // },w => console.log(JSON.stringify(this.state.objectList)))
            
        }

        const addInput = (event) => {

            console.log(document.getElementById('nameInput').value);            


            setRowData([...rowData,
                {
                    name:document.getElementById('nameInput').value,
                    month:document.getElementById('monthInput').value,
                    $:document.getElementById('$Input').value,
                }
            ])


        }


        //TODO: save the data // select and modify grid

        

        return(

            <div style={{margin:'20px'}}>

                <label for='nameInput' style={{margin:'5px'}}> Name</label>
                <input 
                    type="text" 
                    id='nameInput' 
                    name='nameInput' 
                    required 
                    >
                </input>

                <label for='monthInput' style={{margin:'5px'}}> Month</label>
                <select id='monthInput' name='monthInput' required defaultValue='Jul' >
                    <option value='Jan'>Jan</option>
                    <option value='Feb'>Feb</option>
                    <option value='March'>March</option>
                    <option value='April'>April</option>
                    <option value='May'>May</option>
                    <option value='Jun'>Jun</option>
                    <option value='Jul'>Jul</option>
                    <option value='Aug'>Aug</option>
                    <option value='Sept'>Sept</option>
                    <option value='Oct'>Oct</option>
                    <option value='Nov'>Nov</option>
                    <option value='Dec'>Dec</option>
                </select>

                <label for='$Input' style={{margin:'5px'}}> $</label>
                <input 
                    type="number" 
                    id='$Input' 
                    name='$Input' 
                    required 

                    >
                </input>
                <br/>
                <button id='AddButton' style={{margin:'10px'}}  onClick={() => addInput()} >
                    Add
                </button>
                <button id='RemoveButton' style={{margin:'10px'}} onClick={() => removeLast()}>Delete Last</button>

            </div>
        )
    }

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        
    };


    
    useEffect(()=>{

        document.getElementById('nameInput').focus();


        (rowData)?console.log('We have Data'):console.log('no data')

        console.log(rowData)

        // getTotalRow(rowData)

        // gridApi.applyTransaction({update:rowData})

        //fetching Data --> parse Json --> (rowData => setRowData(rowData))

    },[rowData])

    // const onButtonClick = e => {
    //     const selectedNodes = gridRef.current.api.getSelectedNodes();
    //     const selectedData = selectedNodes.map( node => node.data );
    //     const selectedDataStringPresentation = selectedData.map( node => `${node.name} ${node.month} ${node.$}`).join(', ')
    //     alert(`Selected nodes: ${selectedDataStringPresentation}`)
    // }



    const getParams = () => {
        return { 

            allColumns: getBoolean('allColumns') ,
            // skipHeader: true,
            fileName: `CuentasDelMes${d.getMonth()+1}.xls`,
            supressQuote:true,
            // prependContent:getRows

        };
    }

    function getBoolean(id) {
        var field = document.querySelector('#'+ id);
        return field
    }
  
    // const onBtnExport = () => {
    //     gridApi.exportDataAsCsv(getParams());
    // };

      
    function onBtExport2() {
        gridApi.exportDataAsExcel(getParams());
    }

    const getTotalRow = (rowData) => {

        const initial = {
          name: undefined,
          month: undefined,
          $: 'Total', 
        };

        const rowTotal = rowData.reduce((totals, rowData) => {
            totals += Number(rowData.$)
            return totals
        },0) 
      
      
        return rowTotal


      }
    

    return(

        <div style={{marginTop:'80px', marginBottom:'80px'}}>

            <h1>AG GRID</h1>

            <PurchasesInput/>

            <div className="ag-theme-alpine" style={{height: 300, width: '90vw', background:'black'}}>
                          
                <button style={{margin:'10px'}} onClick={() => onBtExport2()}>
                    Download EXCEL file
                </button>

                <Suspense fallback={null}>

                <AgGridReact 
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        resizable: true,
                        minWidth: 100,
                        flex: 1,
                    }}
                    rowData={rowData}
                    ref={gridRef}
                    // rowSelection='multiple'
                    onGridReady={ onGridReady }
                    pinnedBottomRowData={ 
                        [
                            {
                                name: 'TOTAL $',
                                $: `${getTotalRow(rowData)}`,
                            },
                          ]
                            
                    }
                    // popupParent={document.body}
                    // groupSelectsChildren={true}
                    // autoGroupColumnDef={{
                    //         headerName: "name",
                    //         field: "name",
                    //         cellRenderer:'agGroupCellRenderer',
                    //         cellRendererParams: {
                    //             checkbox: true
                    //         }
                    // }}
                >
                    <AgGridColumn 
                        field='name' 
                        // checkboxSelection={true}
                        minWidth={200}

                    ></AgGridColumn>

                    <AgGridColumn 
                        field='month' 
                        minWidth={200}
                    ></AgGridColumn>

                    <AgGridColumn 
                        field='$' 
                        minWidth={200}
                        maxWidth={900}
                    ></AgGridColumn>
                    
                </AgGridReact>

                </Suspense>
            </div>

        </div>

    )
}

export default AgGridComponent