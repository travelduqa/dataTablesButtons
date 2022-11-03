				buttons: {
					dom: {
						button: {
							className: 'btn btn-sm btn-info mr-2' //Primary class for all buttons
						}
					},
					buttons: [                  
						
						{
							//COPY
							extend: 'copy',
							text: '<i class="icon ni ni-file"></i> Copy',
							exportOptions: {
								columns: "thead th:not(.noExport)"
							}
						},
						{
							//pdf
							extend: 'pdf',
							text: '<i class="icon ni ni-file-pdf"></i> Pdf',
							exportOptions: {
								columns: "thead th:not(.noExport)"
							}
						},
						{
							//EXCEL
							extend: 'excel',
							text: '<i class="icon ni ni-file-xls"></i> Excel',
							exportOptions: {
								columns: "thead th:not(.noExport)"
							}
						},
						
						{
							//PRINT
							extend: 'print',
							text: '<i class="icon ni ni-printer"></i> Print',
							exportOptions: {
								columns: "thead th:not(.noExport)"
							}
						}
						
					]
				}
