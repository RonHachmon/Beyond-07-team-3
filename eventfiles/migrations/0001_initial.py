# Generated by Django 4.0.3 on 2022-04-02 12:30

from django.db import migrations, models
import django.db.models.deletion
import eventfiles.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('events', '0004_add_event_participant_test_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventFile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to=eventfiles.models.upload_to_function)),
                ('participant_id', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT,
                                                     to='events.eventparticipant')),
            ],
        ),
    ]
