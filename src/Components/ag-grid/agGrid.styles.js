import styled from 'styled-components';



export const AGgridContainer = styled.div`

    @import "../node_modules/ag-grid-community/src/styles/ag-grid.scss";
    @import "../node_modules/ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine-mixin.scss";

    height: 300;
    width: '90vw'; 

    @include ag-theme-alpine((
        odd-row-background-color: #BFC8DC
    ));


`