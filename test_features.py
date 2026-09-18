from pathlib import Path


def test_orders_and_exports_are_present_in_ui():
    html = Path('index.html').read_text(encoding='utf-8')
    assert 'id="ordersView"' in html
    assert 'id="exportProductsBtn"' in html
    assert 'id="exportInvoicesBtn"' in html
    assert 'id="exportOrdersBtn"' in html
    assert 'id="downloadInvoicePdfBtn"' in html
    assert 'id="posView"' in html
    assert 'id="expensesView"' in html


def test_backend_supports_orders_and_export_routes():
    app_py = Path('backend/app.py').read_text(encoding='utf-8')
    assert "@app.route('/api/orders'" in app_py
    assert "@app.route('/api/invoices/<int:invoice_id>/pdf'" in app_py
    assert "@app.route('/api/export/<string:scope>.xlsx'" in app_py
    assert "@app.route('/api/expenses'" in app_py
    assert "@app.route('/api/backup'" in app_py
    assert "@app.route('/api/pos/checkout'" in app_py
