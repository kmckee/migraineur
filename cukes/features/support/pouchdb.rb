module PouchDb
    @@browser = nil
    @@db_name = ''
    def self.browser
        @@browser
    end
    def self.db_name
        @@db_name
    end
    def self.connect(browser, db_name)
        @@browser = browser
        @@db_name = db_name
    end
    def self.destroy
            db_name = PouchDb.db_name
            browser = PouchDb.browser
            destroy_db_script = "(function() { " +
                                        "var db = new PouchDB('#{db_name}');" +
                                        "db.destroy();" +
                                    "})();"

            browser.execute_script(destroy_db_script)
            sleep 0.1 #Eventually, replace with testing dom to know when async is done.
    end
    module Base
        def save!
            db_name = PouchDb.db_name
            json = self.to_json
            browser = PouchDb.browser
            insert_object_script = "(function() { " +
                                        "var db = new PouchDB('#{db_name}');" +
                                        "db.put(#{json});" +
                                    "})();"

            browser.execute_script(insert_object_script)
            sleep 0.1 #Eventually, replace with testing dom to know when async is done.
        end

        def to_json
            hash = {}
            self.instance_variables.each do |var|
                clean_var = var.to_s.gsub(/@/, '')
                clean_var = '_id' if clean_var == 'id'
                hash[clean_var] = self.instance_variable_get var
            end
            hash.to_json
        end
    end
end
