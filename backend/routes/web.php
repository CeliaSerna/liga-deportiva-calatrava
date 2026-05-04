use Illuminate\Support\Facades\Artisan;

Route::get('/instalar-todo', function () {
    try {
        // Esto crea las tablas y mete los usuarios del Seeder
        Artisan::call('migrate:fresh --seed --force');
        return "Éxito: Tablas creadas y usuarios admin y lector listos.";
    } catch (\Exception $e) {
        return "Error: " . $e->getMessage();
    }
});