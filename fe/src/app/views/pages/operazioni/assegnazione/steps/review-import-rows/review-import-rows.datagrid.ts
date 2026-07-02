import { DataGridSearchConfig } from './../../../../../../../interfaces/datagrid';

export function createReviewSearchConfig(): DataGridSearchConfig {
  return {
    enabled: true,

    fields: [
      { field: 'codFiscale', label: 'Codice Fiscale', type: 'text', size: '3', operator: 'contains' },
      { field: 'nome', label: 'Nome', type: 'text', operator: 'contains' },
      { field: 'cognome', label: 'Cognome', type: 'text', operator: 'contains' },
    ]
  }
};
